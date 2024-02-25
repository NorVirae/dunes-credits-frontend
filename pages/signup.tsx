import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layouts from "@/components/layouts";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <Layouts>

            <section
                className={`home`}
            >
                <div className={"home__inner"}>

                    <Head>
                        <title>Register Page</title>
                        <meta name="description" content="Login Page" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <main>
                        <h1>You Need Credits? You Got it! Register!</h1>

                        <RegisterForm />
                    </main>
                </div>
            </section>
        </Layouts>

    );
}
