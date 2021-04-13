import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { Links } from '../../../mocksData/linkItems';
import './EditModal.css';

export default function EditModal(props) {
  const { show, movie, handleConfirm } = props;
  const formData = {
    id: movie.id,
    budget: movie.budget,
    genres: 0,
    overview: movie.overview,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    revenue: movie.revenue,
    runtime: movie.runtime,
    tagline: movie.tagline,
    title: movie.title,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count
  }

  const resetValues = {
    overview: '',
    poster_path: '',
    release_date: '',
    runtime: '',
    title: '',
    tagline: '',
    genres: -1,
    id: movie.id,
    budget: movie.budget,
    revenue: movie.revenue,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count
  }

  if (!show) {
    return null;
  }

  const onChangeGenres = (event, setFieldValue) => {
    setFieldValue('genres', event.target.value);
  };

  return (
    <div className="modal-edit" id="modal-edit">
      <Formik
          initialValues={formData}
          onSubmit={(values) => handleConfirm(values)}
        >
         {({ setFieldValue, setValues }) => {
           return (
              <div className="modal-edit-wrap">
                <div className="edit-header">
                  <span className="edit-close-sign" onClick={props.onClose}>x</span>
                </div>
                <div className="edit-body">
                  <h2>Edit movie</h2>
                  <label htmlFor="movie-id">Movie ID</label>
                  <input
                    className="edit-input"
                    id="movie-id"
                    type="text"
                    value={movie.id}
                    disabled
                  />
                  <label htmlFor="movie-title">Title</label>
                  <Field
                    className="edit-input"
                    id="movie-title"
                    name="title"
                    type="text"
                    placeholder="e.g. Moana"
                    autoComplete="off"
                  />
                  <label htmlFor="release-date">Release Date</label>
                  <Field
                    className="edit-input"
                    id="elease-date"
                    name="release_date"
                    type="date"
                    placeholder="Select Date"
                  />
                  <label htmlFor="movie-url">Movie URL</label>
                  <Field
                    className="edit-input"
                    id="movie-url"
                    name="poster_path"
                    type="url"
                    placeholder='e.g. moana.com'
                    autoComplete="off"
                  />
                  <label htmlFor="genres">Genre</label>
                  <Field id="genres" className="edit-input filter-select" name="genres" component="select" onChange={(e) => onChangeGenres(e, setFieldValue)}>
                    {
                      Links.map((el, index) => {
                        return movie.genres[0] === el ? <option key={el} value={0}>{el}</option> : <option key={el} value={index + 1}>{el}</option>
                      })
                    }
                  </Field>
                  <label htmlFor="overview">Overview</label>
                  <Field
                    className="edit-input"
                    id="overview"
                    name="overview"
                    type="text"
                    placeholder="Type movie overview here"
                    autoComplete="off"
                  />
                  <label htmlFor="runtime">Runtime</label>
                  <Field
                    className="edit-input"
                    id="runtime"
                    name="runtime"
                    type="text"
                    placeholder="Movie runtime"
                    autoComplete="off"
                  />
                  <label htmlFor="tagline">Tagline</label>
                  <Field
                    className="edit-input"
                    id="tagline"
                    name="tagline"
                    type="text"
                    placeholder="Movie tagline"
                    autoComplete="off"
                  />
                </div>
                <div className="edit-footer">
                  <button className="edit-reset-btn" onClick={() => setValues(resetValues)}>Reset</button>
                  <button className="edit-submit-btn" type="submit" onClick={props.handleConfirm}>Save</button>
                </div>
              </div>
             );
            }}
          </Formik>
    </div>
  );
}

EditModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  movie: PropTypes.object
}
