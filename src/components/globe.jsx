import IconCloud from "./ui/icon-cloud";

const slugs = [
  "python",
  "php",
  "javascript",
  "html5",
  "css3",
  "react",
  "laravel",
  "flutter",
  "flask",
  "mysql",
  "supabase",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "canva",
  "n8n",
  "laragon",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;