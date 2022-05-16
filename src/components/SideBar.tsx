import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface SideBar {
  genres:GenreResponseProps[];
  selectedGenreId:number;
  onGenreId:(id:number) => void;
}

export function SideBar({ genres , selectedGenreId , onGenreId }:SideBar) {
  
  function handleClickButton(id: number) {
    onGenreId(id);
  }
  
  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
  )
}