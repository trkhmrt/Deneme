import { Button, Html } from "@react-email/components";
import * as React from "react";

type WelcomeProps = {
    firstname : string;

}

export default function Welcome({firstname}:WelcomeProps) {
    return (
        <Html>
            <h1>HELLOO {firstname} Welcome!.</h1>
        </Html>
    );
}
