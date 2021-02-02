import { contramap, Eq, eqString } from "fp-ts/Eq";

const stock = {
  id: "stock" as const,
  title: "Stocks",
  definition:
    "Companies issue stocks as a security to represent a share in the company. " +
    "These stocks (or `shares`) can be issued internally within the company's" +
    " founders and employees or via an IPO - enabling the publicto buy a stake in" +
    " the company.By selling stock to the public, the company in effect raises capital in return for shares.",
};

const bond = {
  id: "bond" as const,
  title: "Bonds",
  definition:
    "A company (or any other financial institution" +
    " - including governments) can issue loans to the public in order to raise capital. " +
    "These loans are known as `bonds` - bonding between the issuer and the buyer." +
    "Each bond has it's own interest rate - and then paid back fully on its expiry date",
};

const finOption = {
  id: "option" as const,
  title: "Options",
  definition:
    "A company (or any other financial institution" +
    " - including governments) can issue loans to the public in order to raise capital. " +
    "These loans are known as `bonds` - bonding between the issuer and the buyer." +
    "Each bond has it's own interest rate - and then paid back fully on its expiry date",
};

const etf = {
  id: "etf" as const,
  title: "ETFs",
  definition:
    "A company (or any other financial institution" +
    " - including governments) can issue loans to the public in order to raise capital. " +
    "These loans are known as `bonds` - bonding between the issuer and the buyer." +
    "Each bond has it's own interest rate - and then paid back fully on its expiry date",
};

const futures = {
  id: "future" as const,
  title: "Futures",
  definition:
    "A company (or any other financial institution" +
    " - including governments) can issue loans to the public in order to raise capital. " +
    "These loans are known as `bonds` - bonding between the issuer and the buyer." +
    "Each bond has it's own interest rate - and then paid back fully on its expiry date",
};

export const financialAssets = [stock, bond, etf, finOption, futures];
type FinancialAssets = typeof financialAssets[number];
const eqAsset = contramap((asset: FinancialAssets) => asset.id)(eqString);
function filterAsset<A>(E: Eq<A>): (arr: A[], asset: A) => A[] {
  return (arr, asset) =>
    arr.filter((item) => E.equals(item, asset));
}

export const res = filterAsset(eqAsset)(financialAssets, stock);
