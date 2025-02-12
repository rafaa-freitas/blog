import { useNavigate, useParams } from 'react-router-dom';
import MostViewedCard from '../../components/MostViewedCard';
import Post from '../../interfaces/Post';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { AxiosResponse } from 'axios';

function Search() {
  const { word_search } = useParams<{ word_search: string }>();

  const [search, setSearch] = useState<Post[]>([]);

  const [form, setForm] = useState<{ search: string }>({
    search: word_search || '',
  });

  const navigate = useNavigate();

  const [word, setWord] = useState(word_search);

  useEffect(() => {
    if (word) {
      api.get(`/posts?q=${word}`).then((response: AxiosResponse<Post[]>) => {
        setSearch(response.data);
      });
    }
  }, [word]);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    // Desestruturação do nome e valor da propriedade do campo
    const { value, name } = event.target;

    // Pega o valor antigo e adiciona o novo que veio
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Atualiza a palavra buscada e renderiza novamente
    setWord(form.search);
    navigate(`/search/${form.search}`);
  }

  return (
    <section className="container-layout">
      <h6 className="uppercase color-primary text-center">
        {search.length} resultados
      </h6>
      <h4 className="text-center">"{word}"</h4>

      <form onSubmit={handleSearch}>
        <div className="row flex flex-wrap w-full items-center justify-center">
          <div className="w-grid-2 hidden"></div>
          <div className="flex items-center justify-center w-grid-8 flex-center">
            <input
              type="text"
              name="search"
              placeholder="Buscar..."
              onChange={onChange}
            />
            <button className="btn ml-2">Buscar</button>
          </div>
          <div className="w-grid-2 hidden"></div>
        </div>
      </form>

      <div className="flex flex-wrap w-full row">
        {search.map((item: Post) => {
          return <MostViewedCard key={item.id} post={item} />;
        })}
      </div>
    </section>
  );
}

export default Search;
