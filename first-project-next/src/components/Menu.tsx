import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
    op4: string;
}

export const Menu: React.FC<IMenu> = ({ op1, op2, op3, op4 }) => {
    return (
        <nav className="flex flex-wrap items-center justify-center gap-4">
            <Link href={ROUTES.home}>{op1}</Link>
            <Link href={ROUTES.axios}>{op2}</Link>
            <Link href={ROUTES.noHook}>{op3}</Link>
            <Link href={ROUTES.figma}>{op4}</Link>
        </nav>
    )
}