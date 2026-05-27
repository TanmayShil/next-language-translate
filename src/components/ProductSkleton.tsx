import React from 'react'

const ProductSkleton = () => {
  return (
   <section className="">
        <div className="mx-auto max-w-8xl">
          <div className="mb-14 text-center">
            <div className="mx-auto mb-4 h-10 w-72 animate-pulse rounded-2xl bg-muted" />
            <div className="mx-auto h-4 w-full max-w-xl animate-pulse rounded-2xl bg-muted" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-border/50 bg-background shadow-lg"
              >
                <div className="flex h-[240px] items-center justify-center bg-muted/40 p-6">
                  <div className="h-[180px] w-[140px] animate-pulse rounded-2xl bg-muted" />
                </div>
                <div className="space-y-4 p-5">
                  <div className="h-6 w-24 animate-pulse rounded-full bg-muted" />
                  <div className="space-y-2">
                    <div className="h-4 w-full animate-pulse rounded-xl bg-muted" />
                    <div className="h-4 w-4/5 animate-pulse rounded-xl bg-muted" />
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="h-3 w-full animate-pulse rounded-xl bg-muted" />
                    <div className="h-3 w-3/4 animate-pulse rounded-xl bg-muted" />
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="h-5 w-16 animate-pulse rounded-xl bg-muted" />
                    <div className="h-5 w-20 animate-pulse rounded-xl bg-muted" />
                  </div>
                  <div className="pt-3">
                    <div className="h-11 w-full animate-pulse rounded-xl bg-muted" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ProductSkleton