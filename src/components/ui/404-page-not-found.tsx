import { Link } from 'react-router-dom';
 

export const NotFoundPage = () => {
  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
    <div className="max-w-md text-center space-y-6">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-semibold text-foreground">Page Not Found</h2>
      <p className="text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="w-full max-w-xs mx-auto mt-8">
          <dotlottie-player
            src="https://lottie.host/1e8fc3d9-4b9e-4919-b2e1-7f5b991be295/MEKlwi7tC1.lottie"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          />
        </div>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-8"
      >
        Return to Homepage
      </Link>
    </div>
  </div>
);
}