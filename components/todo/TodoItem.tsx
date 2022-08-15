import styled from '@emotion/styled';

const Wrapper = styled.div`
  border: 1px solid;
`;

interface props {
  title: string;
}

export default function TodoItem({ title }: props) {
  return <Wrapper>{title}</Wrapper>;
}
