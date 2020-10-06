import { Container } from './styles';

export type TestComponentProps = {
  children: React.ReactNode;
};

export const TestComponent = ({ children }: TestComponentProps) => {
  return <Container>{children}</Container>;
};
