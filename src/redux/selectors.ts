import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const selectSelf = (state: RootState) => state;

//breadcrumbs reducer
export const selectBreadcrumbItems = createDraftSafeSelector(selectSelf, state => state.breadcrumbs.items);
