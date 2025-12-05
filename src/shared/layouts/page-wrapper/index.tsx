import type { FC, ReactNode } from 'react';
import { Footer, Header, Spinner, TextH1, TextP } from '../../components';

type PageWrapperProps = {
  children: ReactNode;
  title?: string;
  isDataError?: boolean;
  isDataLoading?: boolean;
  errorText?: string;
  headerRightContent?: ReactNode;
};

export const PageWrapper: FC<PageWrapperProps> = ({
  children,
  title,
  isDataError = false,
  isDataLoading = false,
  errorText,
  headerRightContent,
}) => {
  if (isDataLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner width={100} height={100} border={10} />
      </div>
    );
  }

  if (isDataError) {
    return <TextP>{errorText ?? 'Something Went Wrong'}</TextP>;
  }

  return (
    <>
      <Header rightContent={headerRightContent} />

      <div className="p-8 grow">
        {title && <TextH1 className="mb-10">{title}</TextH1>}
        {children}
      </div>

      <Footer />
    </>
  );
};
