import { Html } from '@kitajs/html';
import { Suspense } from '@kitajs/html/suspense';
import { SuspenseId } from '@kitajs/runtime';

export function get(rid: SuspenseId) {
  return (
    <html>
      <head>
        <title>Homepage</title>
      </head>
      <body>
        <h1>Homepage</h1>

        <Suspense rid={rid} fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      </body>
    </html>
  );
}

export async function Component() {
  // waits for 1 second
  await new Promise((res) => setTimeout(res, 2000));

  return <div style={{ color: 'red' }}>Loaded!</div>;
}
