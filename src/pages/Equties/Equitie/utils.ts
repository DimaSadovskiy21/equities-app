import { getCorrectIndex } from "utils";

export const createOrdinalNumber = (index: number, currentPage: number) =>
  currentPage === 1 ? getCorrectIndex(index) : index + 1 + (currentPage - 1) * 10;