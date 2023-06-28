import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Portfolio of Justin Chu';
	const description = "Hello 👋 I'm Justin, a Blockchain Full Stack Developer!";

	return {
		title,
		description,
		canonical: `https://justin-chu-portfolio.web.app/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'justin',
			url: `https://justin-chu-portfolio.web.app/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://justin-chu-portfolio.web.app/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		...props,
	};
}
