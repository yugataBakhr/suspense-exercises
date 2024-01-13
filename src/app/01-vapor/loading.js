import React from "react";

import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";
import { range } from "@/utils";

export const dynamic = "force-dynamic";

function VaporExercise() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
        <p>😊</p>
      </header>
      <div className="game-grid">
        {range(12).map((game, index) => (
          <LibraryGameCardSkeleton key={index} game={game} />
        ))}
      </div>
    </section>
  );
}

export default VaporExercise;
