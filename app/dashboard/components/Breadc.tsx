import Link from "next/link";

interface IProps {
  links: ILink[];
}

type ILink = {
  name: string;
  href?: string;
}

export default function Breadc({links} : IProps) {
  return (
    <div className="breadcrumbs text-sm">
        <ul>
            {links.map((link, index) => (
              <li key={index}>
                {link.href ? <Link href={link.href}>{link.name}</Link> : link.name}
              </li>
            ))}
        </ul>
    </div>
  )
}
