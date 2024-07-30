"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@venmo/ui/components/ui/button";
import { AppBar } from "@ui/components/ui/appbar";

export default function HomeForm() {
  const session = useSession();
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[hsl(0,0%,100%)] text-[hsl(222.2,84%,4.9%)]">
      <AppBar
        logoSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjExIiBoZWlnaHQ9IjQxIiB2aWV3Qm94PSIwIDAgMjExIDQxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMzQuNTc3MSAwLjgyMjAyMUMzNS45OTc0IDMuMTY3MzMgMzYuNjM3NyA1LjU4MzAxIDM2LjYzNzcgOC42MzQ1MUMzNi42Mzc3IDE4LjM2NzIgMjguMzI3NyAzMS4wMTA3IDIxLjU4MzIgMzkuODg4OEg2LjE3ODI1TDAgMi45NTI5NkwxMy40ODg3IDEuNjcyNThMMTYuNzU1MiAyNy45NTQ4QzE5LjgwNzQgMjIuOTgzNCAyMy41NzM4IDE1LjE3MSAyMy41NzM4IDkuODQ0NTNDMjMuNTczOCA2LjkyOTAyIDIzLjA3NDMgNC45NDMxOCAyMi4yOTM1IDMuMzA4MDZMMzQuNTc3MSAwLjgyMjAyMVoiIGZpbGw9IiMwMDhDRkYiLz4KPHBhdGggZD0iTTUyLjA1OTUgMTcuMDg4N0M1NC41NDE3IDE3LjA4ODcgNjAuNzkwNyAxNS45NTM0IDYwLjc5MDcgMTIuNDAyNEM2MC43OTA3IDEwLjY5NzMgNTkuNTg0OCA5Ljg0Njc2IDU4LjE2MzcgOS44NDY3NkM1NS42Nzc2IDkuODQ2NzYgNTIuNDE1IDEyLjgyNzUgNTIuMDU5NSAxNy4wODg3Wk01MS43NzUxIDI0LjEyMTRDNTEuNzc1MSAyOC40NTczIDU0LjE4NjUgMzAuMTU4NCA1Ny4zODM0IDMwLjE1ODRDNjAuODY0NyAzMC4xNTg0IDY0LjE5NzkgMjkuMzA3OCA2OC41MzAzIDI3LjEwNjVMNjYuODk4NSAzOC4xODUyQzYzLjg0NiAzOS42NzYzIDU5LjA4ODggNDAuNjcxMyA1NC40NzEzIDQwLjY3MTNDNDIuNzU4NCA0MC42NzEzIDM4LjU2NjQgMzMuNTY5MyAzOC41NjY0IDI0LjY5MDhDMzguNTY2NCAxMy4xODM0IDQ1LjM4NTMgMC45NjQ2IDU5LjQ0MzYgMC45NjQ2QzY3LjE4MzcgMC45NjQ2IDcxLjUxMTcgNS4zMDAxMyA3MS41MTE3IDExLjMzNzFDNzEuNTEyNCAyMS4wNjk1IDU5LjAxODggMjQuMDUxIDUxLjc3NTEgMjQuMTIxNFoiIGZpbGw9IiMwMDhDRkYiLz4KPHBhdGggZD0iTTExMC40MzkgOS4zNDgzNUMxMTAuNDM5IDEwLjc2ODcgMTEwLjIyNCAxMi44Mjg5IDExMC4wMDkgMTQuMTc1M0wxMDUuOTYyIDM5Ljc0NzRIOTIuODI3NUw5Ni41MTk2IDE2LjMwNTlDOTYuNTg5NiAxNS42NzAxIDk2LjgwNDggMTQuMzkwMSA5Ni44MDQ4IDEzLjY3OTlDOTYuODA0OCAxMS45NzQ3IDk1LjczOTMgMTEuNTQ5MyA5NC40NTgzIDExLjU0OTNDOTIuNzU2OCAxMS41NDkzIDkxLjA1MTMgMTIuMzI5OCA4OS45MTU1IDEyLjg5OTdMODUuNzI3OCAzOS43NDc3SDcyLjUxOTVMNzguNTUzNyAxLjQ2MTg1SDg5Ljk4NTVMOTAuMTMwMiA0LjUxNzczQzkyLjgyNzIgMi43NDIyNCA5Ni4zNzg1IDAuODIyMDIyIDEwMS40MTcgMC44MjIwMjJDMTA4LjA5MyAwLjgyMTI5MiAxMTAuNDM5IDQuMjMxOSAxMTAuNDM5IDkuMzQ4MzVaIiBmaWxsPSIjMDA4Q0ZGIi8+CjxwYXRoIGQ9Ik0xNDkuNDMyIDUuMTU1NzdDMTUzLjE5NCAyLjQ1OTM2IDE1Ni43NDYgMC45NjQ2IDE2MS42NDMgMC45NjQ2QzE2OC4zODcgMC45NjQ2IDE3MC43MzMgNC4zNzUyMSAxNzAuNzMzIDkuNDkxNjdDMTcwLjczMyAxMC45MTIxIDE3MC41MTggMTIuOTcyMyAxNzAuMzA0IDE0LjMxODdMMTY2LjI2MSAzOS44OTA3SDE1My4xMjNMMTU2Ljg4NiAxNS45NTM4QzE1Ni45NTUgMTUuMzEzOSAxNTcuMTAxIDE0LjUzMzQgMTU3LjEwMSAxNC4wMzgzQzE1Ny4xMDEgMTIuMTE4NCAxNTYuMDM1IDExLjY5MjYgMTU0Ljc1NCAxMS42OTI2QzE1My4xMjMgMTEuNjkyNiAxNTEuNDkyIDEyLjQwMjggMTUwLjI4MSAxMy4wNDNMMTQ2LjA5NCAzOS44OTExSDEzMi45NkwxMzYuNzIyIDE1Ljk1NDFDMTM2Ljc5MSAxNS4zMTQzIDEzNi45MzMgMTQuNTMzOCAxMzYuOTMzIDE0LjAzODdDMTM2LjkzMyAxMi4xMTg4IDEzNS44NjYgMTEuNjkzIDEzNC41OSAxMS42OTNDMTMyLjg4NSAxMS42OTMgMTMxLjE4MyAxMi40NzM1IDEzMC4wNDcgMTMuMDQzNEwxMjUuODU2IDM5Ljg5MTVIMTEyLjY1MkwxMTguNjg2IDEuNjA1NTJIMTI5Ljk3OEwxMzAuMzMzIDQuODAxNzZDMTMyLjk2IDIuODg2MjggMTM2LjUwOCAwLjk2NjA1NyAxNDEuMjY1IDAuOTY2MDU3QzE0NS4zODQgMC45NjQ1OTkgMTQ4LjA4IDIuNzQwNDUgMTQ5LjQzMiA1LjE1NTc3WiIgZmlsbD0iIzAwOENGRiIvPgo8cGF0aCBkPSJNMTk2Ljg2OSAxNi4zMDc2QzE5Ni44NjkgMTMuMTgyMSAxOTYuMDg3IDExLjA1MTIgMTkzLjc0NiAxMS4wNTEyQzE4OC41NjMgMTEuMDUxMiAxODcuNDk4IDIwLjIxMzMgMTg3LjQ5OCAyNC45MDAzQzE4Ny40OTggMjguNDU2IDE4OC40OTMgMzAuNjU2NiAxOTAuODM0IDMwLjY1NjZDMTk1LjczMyAzMC42NTY2IDE5Ni44NjkgMjAuOTk0MiAxOTYuODY5IDE2LjMwNzZaTTE3NC4xNSAyNC4zMzQ1QzE3NC4xNSAxMi4yNjA4IDE4MC41MzkgMC45NjMzNzkgMTk1LjIzOCAwLjk2MzM3OUMyMDYuMzE0IDAuOTYzMzc5IDIxMC4zNjMgNy40OTk4NSAyMTAuMzYzIDE2LjUyMkMyMTAuMzYzIDI4LjQ1NTYgMjA0LjA0MyA0MC44MTQgMTg4Ljk4OSA0MC44MTRDMTc3Ljg0MiA0MC44MTQgMTc0LjE1IDMzLjQ5NyAxNzQuMTUgMjQuMzM0NVoiIGZpbGw9IiMwMDhDRkYiLz4KPC9zdmc+Cg=="
        user={session.data?.user}
        onLogoClick={async () => {
          router.push("/");
        }}
        buttonClass="text-[hsl(221.2,83.2%,53.3%)] hover:bg-[hsl(221.2,83.2%,53.3%)] hover:text-[hsl(210,40%,98%)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(221.2,83.2%,53.3%)]"
        onSignin={signIn}
        buttonVariant="outline"
        onSignout={async () => {
          await signOut();
          router.push("/api/auth/signin");
        }}
      />
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 lg:py-32 xl:py-40 bg-gradient-to-l from-[hsl(221.2,63.2%,53.3%)] to-[hsl(210,40%,96.1%)]">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-[hsl(210,40%,98%)] sm:text-5xl md:text-6xl">
                Futuristic Payments, Seamless Experience
              </h1>
              <p className="text-lg text-[hsl(210,40%,98%)] md:text-xl">
                Our cutting-edge payment app revolutionizes the way you manage
                your finances. Secure, fast, and intuitive - the perfect
                companion for your modern, tech-savvy lifestyle.
              </p>
              <div>
                {session.data?.user ? (
                  <Button
                    className="bg-[hsl(221.2,69.2%,53.3%)] text-[hsl(210,40%,98%)] hover:bg-[hsl(221.2,70.2%,48%)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(221.2,83.2%,53.3%)]"
                    onClick={() => {
                      router.push("/dashboard");
                    }}
                  >
                    Go to Dashboard
                  </Button>
                ) : (
                  <Button
                    className="bg-[hsl(221.2,83.2%,53.3%)] text-[hsl(210,40%,98%)] hover:bg-[hsl(221.2,83.2%,48%)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(221.2,83.2%,53.3%)]"
                    onClick={() => {
                      router.push("/api/auth/signin");
                    }}
                  >
                    Get Started
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-[hsl(210,40%,96.1%)] px-3 py-1 text-sm">
                Secure Payments
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Cutting-Edge Security for Your Transactions
              </h2>
              <p className="text-[hsl(215.4,16.3%,44%)] md:text-xl">
                Our futuristic payment app utilizes the latest encryption and
                fraud detection technologies to ensure your financial data is
                protected at all times. Experience the future of secure
                payments.
              </p>
              <div>
                <Button
                  variant="outline"
                  className="text-[hsl(221.2,83.2%,53.3%)] hover:bg-[hsl(221.2,83.2%,53.3%)] hover:text-[hsl(210,40%,98%)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(221.2,83.2%,53.3%)]"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <img
              src="https://generated.vusercontent.net/placeholder.svg"
              width="550"
              height="550"
              alt="Secure Payments"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 lg:py-32 bg-[hsl(210,40%,96.1%)]">
          <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <img
              src="https://generated.vusercontent.net/placeholder.svg"
              width="550"
              height="550"
              alt="Instant Transfers"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-[hsl(210,40%,96.1%)] px-3 py-1 text-sm">
                Instant Transfers
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Lightning-Fast Transactions, Anytime, Anywhere
              </h2>
              <p className="text-[hsl(215.4,16.3%,44%)] md:text-xl">
                With our futuristic payment app, you can send and receive money
                instantly, whether you're across the street or across the globe.
                Experience the future of financial transactions.
              </p>
              <div>
                <Button
                  variant="outline"
                  className="text-[hsl(221.2,83.2%,53.3%)] hover:bg-[hsl(221.2,83.2%,53.3%)] hover:text-[hsl(210,40%,98%)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(221.2,83.2%,53.3%)]"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-[hsl(210,40%,96.1%)] px-3 py-1 text-sm">
                Seamless Integration
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Futuristic Integration with Your Favorite Apps
              </h2>
              <p className="text-[hsl(215.4,16.3%,44%)] md:text-xl">
                Our cutting-edge payment app seamlessly integrates with the
                tools and platforms you already use, allowing you to manage your
                finances without disrupting your workflow. Experience the future
                of financial management.
              </p>
              <div>
                <Button
                  variant="outline"
                  className="text-[hsl(221.2,83.2%,53.3%)] hover:bg-[hsl(221.2,83.2%,53.3%)] hover:text-[hsl(210,40%,98%)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(221.2,83.2%,53.3%)]"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <img
              src="https://generated.vusercontent.net/placeholder.svg"
              width="550"
              height="550"
              alt="Seamless Integration"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 lg:py-32 bg-gradient-to-r from-[hsl(221.2,63.2%,53.3%)] to-[hsl(210,40%,94.1%)]">
          <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <img
              src="https://generated.vusercontent.net/placeholder.svg"
              width="550"
              height="550"
              alt="Intuitive Interface"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-[hsl(210,40%,96.1%)] px-3 py-1 text-sm">
                Intuitive Interface
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[hsl(210,40%,98%)]">
                Simplify Your Finances with a Futuristic Interface
              </h2>
              <p className="text-[hsl(210,40%,98%)] md:text-xl">
                Our payment app's sleek, modern design makes it easy to manage
                your money, track your spending, and stay on top of your
                financial goals. Experience the future of financial management.
              </p>
              <div>
                <Button className="bg-[hsl(210,40%,98%)] text-[hsl(221.2,83.2%,53.3%)] hover:bg-[hsl(210,40%,93%)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(221.2,83.2%,53.3%)]">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gradient-to-r from-[hsl(221.2,63.2%,53.3%)] to-[hsl(210,40%,94.1%)] p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-[hsl(210,40%,98%)]">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              About Us
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Our Team
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Careers
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Payment App
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Invoicing
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Reporting
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Integrations
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Blog
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Documentation
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Support
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Support
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Sales
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Press
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              prefetch={false}
            >
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
