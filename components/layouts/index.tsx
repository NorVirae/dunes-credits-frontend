import { ReactNode } from "react"
import Navbar from "../Navbar"
import { ILayouts } from "@/types"
import Footer from "../Footer"


const Layouts = ({ children }: ILayouts) => {
    return (
        <section className="layouts">
            <Navbar />
            {children}
            <Footer />
        </section>
    )
}

export default Layouts