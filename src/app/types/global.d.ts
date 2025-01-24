declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export default ReactComponent;
  // export default content;
}

declare const __IS_DEV__: boolean;