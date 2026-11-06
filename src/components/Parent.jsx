import Page from './Parent/Page';
import Background from './Parent/background.jpg';

const Parent = () => {
  return (
    <div
      className="bg-cover bg-center min-h-[calc(100svh-4rem)] py-10 md:py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="w-full max-w-4xl mx-auto">
        <Page />
      </div>
    </div>
  );
};

export default Parent;
