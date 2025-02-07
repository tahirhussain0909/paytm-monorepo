"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { AppBar } from "@venmo/ui/components/ui/appbar";
import { SideBar } from "@/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <AppBar
        logo={
          <Image
            src={
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjExIiBoZWlnaHQ9IjQxIiB2aWV3Qm94PSIwIDAgMjExIDQxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMzQuNTc3MSAwLjgyMjAyMUMzNS45OTc0IDMuMTY3MzMgMzYuNjM3NyA1LjU4MzAxIDM2LjYzNzcgOC42MzQ1MUMzNi42Mzc3IDE4LjM2NzIgMjguMzI3NyAzMS4wMTA3IDIxLjU4MzIgMzkuODg4OEg2LjE3ODI1TDAgMi45NTI5NkwxMy40ODg3IDEuNjcyNThMMTYuNzU1MiAyNy45NTQ4QzE5LjgwNzQgMjIuOTgzNCAyMy41NzM4IDE1LjE3MSAyMy41NzM4IDkuODQ0NTNDMjMuNTczOCA2LjkyOTAyIDIzLjA3NDMgNC45NDMxOCAyMi4yOTM1IDMuMzA4MDZMMzQuNTc3MSAwLjgyMjAyMVoiIGZpbGw9IiMwMDhDRkYiLz4KPHBhdGggZD0iTTUyLjA1OTUgMTcuMDg4N0M1NC41NDE3IDE3LjA4ODcgNjAuNzkwNyAxNS45NTM0IDYwLjc5MDcgMTIuNDAyNEM2MC43OTA3IDEwLjY5NzMgNTkuNTg0OCA5Ljg0Njc2IDU4LjE2MzcgOS44NDY3NkM1NS42Nzc2IDkuODQ2NzYgNTIuNDE1IDEyLjgyNzUgNTIuMDU5NSAxNy4wODg3Wk01MS43NzUxIDI0LjEyMTRDNTEuNzc1MSAyOC40NTczIDU0LjE4NjUgMzAuMTU4NCA1Ny4zODM0IDMwLjE1ODRDNjAuODY0NyAzMC4xNTg0IDY0LjE5NzkgMjkuMzA3OCA2OC41MzAzIDI3LjEwNjVMNjYuODk4NSAzOC4xODUyQzYzLjg0NiAzOS42NzYzIDU5LjA4ODggNDAuNjcxMyA1NC40NzEzIDQwLjY3MTNDNDIuNzU4NCA0MC42NzEzIDM4LjU2NjQgMzMuNTY5MyAzOC41NjY0IDI0LjY5MDhDMzguNTY2NCAxMy4xODM0IDQ1LjM4NTMgMC45NjQ2IDU5LjQ0MzYgMC45NjQ2QzY3LjE4MzcgMC45NjQ2IDcxLjUxMTcgNS4zMDAxMyA3MS41MTE3IDExLjMzNzFDNzEuNTEyNCAyMS4wNjk1IDU5LjAxODggMjQuMDUxIDUxLjc3NTEgMjQuMTIxNFoiIGZpbGw9IiMwMDhDRkYiLz4KPHBhdGggZD0iTTExMC40MzkgOS4zNDgzNUMxMTAuNDM5IDEwLjc2ODcgMTEwLjIyNCAxMi44Mjg5IDExMC4wMDkgMTQuMTc1M0wxMDUuOTYyIDM5Ljc0NzRIOTIuODI3NUw5Ni41MTk2IDE2LjMwNTlDOTYuNTg5NiAxNS42NzAxIDk2LjgwNDggMTQuMzkwMSA5Ni44MDQ4IDEzLjY3OTlDOTYuODA0OCAxMS45NzQ3IDk1LjczOTMgMTEuNTQ5MyA5NC40NTgzIDExLjU0OTNDOTIuNzU2OCAxMS41NDkzIDkxLjA1MTMgMTIuMzI5OCA4OS45MTU1IDEyLjg5OTdMODUuNzI3OCAzOS43NDc3SDcyLjUxOTVMNzguNTUzNyAxLjQ2MTg1SDg5Ljk4NTVMOTAuMTMwMiA0LjUxNzczQzkyLjgyNzIgMi43NDIyNCA5Ni4zNzg1IDAuODIyMDIyIDEwMS40MTcgMC44MjIwMjJDMTA4LjA5MyAwLjgyMTI5MiAxMTAuNDM5IDQuMjMxOSAxMTAuNDM5IDkuMzQ4MzVaIiBmaWxsPSIjMDA4Q0ZGIi8+CjxwYXRoIGQ9Ik0xNDkuNDMyIDUuMTU1NzdDMTUzLjE5NCAyLjQ1OTM2IDE1Ni43NDYgMC45NjQ2IDE2MS42NDMgMC45NjQ2QzE2OC4zODcgMC45NjQ2IDE3MC43MzMgNC4zNzUyMSAxNzAuNzMzIDkuNDkxNjdDMTcwLjczMyAxMC45MTIxIDE3MC41MTggMTIuOTcyMyAxNzAuMzA0IDE0LjMxODdMMTY2LjI2MSAzOS44OTA3SDE1My4xMjNMMTU2Ljg4NiAxNS45NTM4QzE1Ni45NTUgMTUuMzEzOSAxNTcuMTAxIDE0LjUzMzQgMTU3LjEwMSAxNC4wMzgzQzE1Ny4xMDEgMTIuMTE4NCAxNTYuMDM1IDExLjY5MjYgMTU0Ljc1NCAxMS42OTI2QzE1My4xMjMgMTEuNjkyNiAxNTEuNDkyIDEyLjQwMjggMTUwLjI4MSAxMy4wNDNMMTQ2LjA5NCAzOS44OTExSDEzMi45NkwxMzYuNzIyIDE1Ljk1NDFDMTM2Ljc5MSAxNS4zMTQzIDEzNi45MzMgMTQuNTMzOCAxMzYuOTMzIDE0LjAzODdDMTM2LjkzMyAxMi4xMTg4IDEzNS44NjYgMTEuNjkzIDEzNC41OSAxMS42OTNDMTMyLjg4NSAxMS42OTMgMTMxLjE4MyAxMi40NzM1IDEzMC4wNDcgMTMuMDQzNEwxMjUuODU2IDM5Ljg5MTVIMTEyLjY1MkwxMTguNjg2IDEuNjA1NTJIMTI5Ljk3OEwxMzAuMzMzIDQuODAxNzZDMTMyLjk2IDIuODg2MjggMTM2LjUwOCAwLjk2NjA1NyAxNDEuMjY1IDAuOTY2MDU3QzE0NS4zODQgMC45NjQ1OTkgMTQ4LjA4IDIuNzQwNDUgMTQ5LjQzMiA1LjE1NTc3WiIgZmlsbD0iIzAwOENGRiIvPgo8cGF0aCBkPSJNMTk2Ljg2OSAxNi4zMDc2QzE5Ni44NjkgMTMuMTgyMSAxOTYuMDg3IDExLjA1MTIgMTkzLjc0NiAxMS4wNTEyQzE4OC41NjMgMTEuMDUxMiAxODcuNDk4IDIwLjIxMzMgMTg3LjQ5OCAyNC45MDAzQzE4Ny40OTggMjguNDU2IDE4OC40OTMgMzAuNjU2NiAxOTAuODM0IDMwLjY1NjZDMTk1LjczMyAzMC42NTY2IDE5Ni44NjkgMjAuOTk0MiAxOTYuODY5IDE2LjMwNzZaTTE3NC4xNSAyNC4zMzQ1QzE3NC4xNSAxMi4yNjA4IDE4MC41MzkgMC45NjMzNzkgMTk1LjIzOCAwLjk2MzM3OUMyMDYuMzE0IDAuOTYzMzc5IDIxMC4zNjMgNy40OTk4NSAyMTAuMzYzIDE2LjUyMkMyMTAuMzYzIDI4LjQ1NTYgMjA0LjA0MyA0MC44MTQgMTg4Ljk4OSA0MC44MTRDMTc3Ljg0MiA0MC44MTQgMTc0LjE1IDMzLjQ5NyAxNzQuMTUgMjQuMzM0NVoiIGZpbGw9IiMwMDhDRkYiLz4KPC9zdmc+Cg=="
            }
            height={500}
            width={200}
            alt="logo"
            className="cursor-pointer h-8"
            onClick={() => {
              router.push("/");
            }}
          />
        }
        showButton={false}
      />
      <div className="flex flex-grow overflow-hidden">
        <SideBar />
        <div className="flex-grow flex justify-center items-center overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
