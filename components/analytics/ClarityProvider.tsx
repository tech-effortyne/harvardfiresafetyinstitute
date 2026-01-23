"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export function ClarityProvider() {
	useEffect(() => {
		Clarity.init("v5y33907x4");
	}, []);

	return null;
}
