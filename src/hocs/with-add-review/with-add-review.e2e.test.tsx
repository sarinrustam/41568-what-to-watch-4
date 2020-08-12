import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withAddReview from "./with-add-review";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "./../../reducer/name-space";

configure({
  adapter: new Adapter()
});

const mockStore = configureStore([]);

interface MockComponentProps {
  onInputComment: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (event: React.FormEvent<HTMLDivElement>) => void;
  onSendComment: (event: React.FormEvent) => void;
}

const MockComponent = (props: MockComponentProps) => {
  const {onInputComment, onChangeRating, onSendComment} = props;

  return (
    <form onSubmit={onSendComment}>
      <textarea onInput={onInputComment}/>
      <div onChange={onChangeRating}/>
      <button type="submit"></button>
    </form>
  );
};

describe(`withAddReview tests`, () => {
  it(`Checks that HOC's callback`, () => {
    const MockComponentWrapped = withAddReview(MockComponent);
    const handleInputComment = jest.fn();
    const event = {target: {value: `sometext`}};
    const store = mockStore({
      [NameSpace.DATA]: {
        movies: [],
        promoMovie: {
          id: 0,
          title: `Pulp Fuction`,
          img: `img/pulp-fiction.jpg`,
          release: 1994,
          genre: `Action`,
          poster: `https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg`,
          coverBackground: `https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_SY1000_CR0,0,1463,1000_AL_.jpg`,
          rating: {
            score: 8.9,
            scoreDesc: `Very good`,
            amount: 2323
          },
          description: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
          crew: {
            director: `Quentin Tarantino`,
            actors: [`Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta, Samuel L. Jackson`]
          },
          isFavorite: false,
          preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
        }
      },
      [NameSpace.APP]: {
        currentGenre: ``,
        countMoviesShow: ``,
      },
      [NameSpace.USER]: {
        authorizationStatus: ``,
        avatar: `defaultAvatar`,
        authorizationError: ``,
      },
      [NameSpace.COMMENTS]: {
        errorText: ``,
        isLoading: false,
        comments: [],
      }
    });
    const movieId = `1`;

    const wrapper = mount(
        <Provider store={store}>
          <MockComponentWrapped
            onSendComment={handleInputComment}
            movieId={movieId}
          />
        </Provider>
    );

    const form = wrapper.find(`form`);
    form.simulate(`submit`, event);

    expect(handleInputComment.mock.calls[0][0].comment).toBe(``);
    expect(handleInputComment.mock.calls[0][0].movieId).toBe(movieId);
    expect(handleInputComment.mock.calls[0][0].rating).toBe(0);
  });
});
