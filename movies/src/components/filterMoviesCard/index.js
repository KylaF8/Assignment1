import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';
import { getGenres } from "../../api/tmdb-frontend-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";


const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function FilterMoviesCard(props) {

  const { data, error, isLoading, isError } = useQuery("genres", getGenres);


  
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres[0].name !== "All"){
    genres.unshift({ id: "0", name: "All" });
  }


  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleYearChange = (e) => {
    handleChange(e, "year", e.target.value)
  };

  const handleSortRatingChange = (e) => {
    props.onUserInput ("sortRating", e.target.checked)
  };

  const handleLanguageChange = (e) => {
    handleChange(e, "language", e.target.value)
  };

  const languages = [
    {code:"", name: "All Languages"},
    {code:"en", name:"English"},
    {code:"es", name:"Spanish"},
    {code:"it", name:"Italian"},
    {code:"ja", name:"Japanese"},
    {code:"ko", name:"Korean"},
    {code:"hi", name:"Hindi"},
  ]

  const handleSortRatingAmountChange = (e) => {
    props.onUserInput ("sortRatingAmount", e.target.checked)
  };


  return (
    <Card 
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(204, 204, 0)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
      sx={{...formControl}}
      id="filled-search"
      label="Search Movies"
      type="search"
      variant="filled"
      value={props.titleFilter}
      onChange={handleTextChange}
    />
        <FormControl sx={{...formControl}}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
    labelId="genre-label"
    id="genre-select"
    defaultValue=""
    value={props.genreFilter}
    onChange={handleGenreChange}
  >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <TextField
      sx={{...formControl}}
      id="filled-search"
      label="Year Search"
      type="search"
      variant="filled"
      value={props.yearFilter}
      onChange={handleYearChange}
    />
    <FormControl sx={{...formControl}}>
          <InputLabel id="language-label">Language</InputLabel>
          <Select
    labelId="language-label"
    id="language-select"
    defaultValue=""
    value={props.languageFilter}
    onChange={handleLanguageChange}
  >
    {languages.map((lang) => {
              return (
                <MenuItem key={lang.code} value={lang.code}>
                  {lang.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      <FormControlLabel
      control={
        <Checkbox
        checked={props.sortRating}
        onChange={handleSortRatingChange}
        />
      }
      label="Sort by Rating"
      />
      <FormControlLabel
      control={
        <Checkbox
        checked={props.sortRatingAmount}
        onChange={handleSortRatingAmountChange}
        />
      }
      label="Sort by Rating Amount"
      />
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}