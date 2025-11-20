"use client";

import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/Button";

interface GreetingResponse {
  greeting: string;
  timestamp: string;
}

async function fetchGreeting(): Promise<GreetingResponse> {
  await new Promise((resolve) => setTimeout(resolve, 350));
  const now = new Date().toISOString();
  return {
    greeting: "Hello from TanStack Query!",
    timestamp: now
  };
}

export function ExampleQuerySection() {
  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["greeting"],
    queryFn: fetchGreeting,
    staleTime: 1000 * 30
  });

  return (
    <section className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">TanStack Query Demo</h2>
          <p className="text-sm text-slate-600">
            {isLoading ? "Loading a greeting..." : data?.greeting}
          </p>
          {data && (
            <p className="mt-2 text-xs text-slate-500">
              Last updated <span className="font-mono">{data.timestamp}</span>
            </p>
          )}
        </div>
        <Button
          variant="secondary"
          onClick={() => refetch()}
          disabled={isFetching}
        >
          {isFetching ? "Refreshing..." : "Refresh greeting"}
        </Button>
      </div>
    </section>
  );
}
