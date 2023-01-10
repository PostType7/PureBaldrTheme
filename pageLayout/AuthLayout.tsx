import Image from 'next/image'
interface Props {
  body: any;
}
export const AuthLayout: React.FC<Props> = ({ body }) => {
  return (
    <div className="relative w-full h-full">
      <div className="fixed z-10 right-0 top-0 bottom-0 w-full h-full md:w-1/4 lg:w-1/3 xl:w-1/2">
      <Image
      className="object-cover"
      alt="Mountains"
      src={`/banner.webp`}
      blurDataURL={`/banner_prev.webp`}
      placeholder="blur"
      width={700}
      height={475}
      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
      </div>
      <div className="absolute md:relative min-h-screen bg-gray-100 z-20 left-0 top-0 w-full h-full md:w-3/4 lg:w-2/3 xl:w-1/2 flex md:justify-center items-center p-0 md:p-6 md:px-0">
        <div className="relative w-full md:w-2/3 xl:w-1/2 h-full md:h-max">
          {body}
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
