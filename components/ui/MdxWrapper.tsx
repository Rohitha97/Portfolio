"use client";
import { useMDXComponent } from "next-contentlayer/hooks";

import CustomImage from "@/app/[lang]/blog/components/ui/Image";
import Link from "@/components/ui/Link";
import Alert from "../../app/[lang]/blog/components/mdx/Alert";
import Parallax from "../../app/[lang]/blog/components/mdx/parallax";
import Weather from "../../app/[lang]/blog/components/mdx/Weather";
import WeatherList from "../../app/[lang]/blog/components/mdx/WeatherList";
import LinkPreview from "../../app/[lang]/blog/components/mdx/LinkPreview";
import path from "path";

interface CustomLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const href = props?.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link {...props} href={href} underline>
        {props.children}
      </Link>
    );
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="font-normal text-link underline underline-offset-4"
      {...props}
    />
  );
};

const components = {
  Image: CustomImage,
  a: CustomLink,
  Link: CustomLink,
  Alert: Alert,
  Parallax: Parallax,
  Weather: Weather,
  WeatherList: WeatherList,
  LinkPreview: LinkPreview,
};

export default function MdxWrapper({ code }: { code: string }) {
  const Component = useMDXComponent(code, { components });

  return <Component components={components} />;
}
