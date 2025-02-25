export interface AppParagraphProps extends React.HTMLAttributes<HTMLElement> {}
export default function AppParagraph({ ...props }: AppParagraphProps) {
  return <p className="text-secondary " {...props} />;
}
