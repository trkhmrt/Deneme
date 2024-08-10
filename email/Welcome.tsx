import { Button, Html } from "@react-email/components";
import * as React from "react";

type WelcomeProps = {
    firstname : string;
    message:string;

}

export default function Welcome({firstname,message}:WelcomeProps) {
    return (
        <Html>
            <h1>HELLOO {firstname} Welcome!.</h1>
            <p>{message}</p>
        </Html>
    );
}
