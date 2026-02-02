/**
 * HTML links to load the fonts used by the editor font picker.
 *
 * If tailwind is removing the font links from the styles, and the font pickers are not working,
 * you can add this component to the root layout/page to make sure the fonts are loaded correctly.
 *
 * In next.js, you can add it to the app/layout.tsx file like this:
 *
 * ```tsx
 * import FontLinks from "@/registry/shadcn/components/font-links";
 *
 * export const metadata = {
 *   title: "My App",
 *   description: "My App Description",
 * };
 *
 * export default function RootLayout({
 *   children,
 * }: {
 *   children: React.ReactNode;
 * }) {
 *   return (
 *     <html lang="en">
 *       <body>
 *         <FontLinks />
 *         {children}
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
const FontLinks = () => {
  return (
    <>
      <link
        precedence="default"
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        precedence="default"
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        precedence="default"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Inconsolata:wght@200..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Libre+Baskerville:ital,wght@0,400..700;1,400..700&family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playwrite+NO:wght@100..400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Science+Gothic:wght@100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
      />
    </>
  );
};

export default FontLinks;
