type BanksType = {
  name: string;
  redirectUrl: string;
}[];

export const SUPPORTED_BANKS: BanksType = [
  {
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com",
  },
  {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com",
  },
  {
    name: "SBI Bank",
    redirectUrl: "https://www.onlinesbi.sbi",
  },
];
