import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { prisma }  from "@venmo/prisma/client";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone number", type: "text", placeholder: "+91**********" },
        password: { label: "Password", type: "password", placeholder: "password" },
      },
      async authorize(credentials: any) {
        try {
          // Ensure credentials are provided
          if (!credentials || !credentials.phone || !credentials.password) {
            throw new Error("Phone number and password are required");
          }

          const { phone, password } = credentials;

          // Find existing user
          const existingUser = await prisma.user.findFirst({
            where: { number: phone },
          });

          if (existingUser) {
            // Compare provided password with stored hash
            const passwordValidation = await bcrypt.compare(password, existingUser.password);
            if (passwordValidation) {
              return {
                id: existingUser.id.toString(),
                name: existingUser.name,
                email: existingUser.email,
              };
            } else {
              throw new Error("Invalid password");
            }
          } else {
            // Hash the provided password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user
            const newUser = await prisma.user.create({
              data: {
                number: phone,
                password: hashedPassword,
              },
            });
            return {
              id: newUser.id.toString(),
              name: newUser.name,
              email: newUser.email,
            };
          }
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error("Failed to authorize user");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
};
