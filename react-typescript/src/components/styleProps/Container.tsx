type ContainerProps = {
  styles: React.CSSProperties;
  children: string;
};

export const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>
      <h2>{props.children}</h2>
    </div>
  );
};
