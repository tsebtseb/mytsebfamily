"use client"
import { Suspense } from "react";
import SpDetails from "./spdetail";
export default function DetailPage(){
    return(
    <Suspense fallback={<div>Loading...</div>}>
        <SpDetails />
    </Suspense>
    );
}