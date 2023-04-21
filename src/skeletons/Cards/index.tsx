import { Skeleton } from "@mui/material";

import styles from "../Cards/Cards.module.scss";

import Card from "./Card";

export default function CardSkeleton() {
  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}
