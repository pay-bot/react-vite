import React, { useState, useEffect } from "react";
import Acara from "../components/home/Acara";
import Welcome from "../components/home/Welcome";
import { getSectionsDetail, getMenusDetail } from "../utils/Api";


export default function Home() {
  return (
    <div>
      <Welcome/>
      <Acara/>
    </div>
  )
}

