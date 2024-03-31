import { Html } from '@kitajs/html';
import { Suspense } from '@kitajs/html/suspense';
import { SuspenseId } from '@kitajs/runtime';
import { setTimeout } from 'timers/promises';

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

// Simple async component which takes a second to render
export async function Component() {
  await setTimeout(1000);
  return <div style={{ color: 'red' }}>Loaded!</div>;
}
