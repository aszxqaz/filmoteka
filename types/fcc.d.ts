import { FC, ReactNode } from "react";

export type FCC<T = {}> = FC<{children?: ReactNode} & T>