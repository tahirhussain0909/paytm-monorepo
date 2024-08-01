import Link from "next/link";

export const Footer = () => {
  return (
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
  );
};
