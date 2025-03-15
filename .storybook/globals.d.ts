declare module "*.png";
declare module "*.jpg";
declare module "*.webp";
declare module "*.pdf";
declare module "*.svg" {
  const content: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default content;
}
