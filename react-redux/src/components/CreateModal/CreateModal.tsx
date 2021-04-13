import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { Links } from '../../../mocksData/linkItems';
import { InitialCreateMovie } from '../../../mocksData/initialCreateMovie';
import './CreateModal.css';

export default function CreateModal(props) {
  const { show, handleConfirm } = props;
  const formData = InitialCreateMovie;

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
         {({ setFieldValue }) => {
           return (
            <Form className="modal-edit-wrap">
                <div className="edit-header">
                  <span className="edit-close-sign" onClick={props.onClose}>x</span>
                </div>
                <div className="edit-body">
                  <h2>Add movie</h2>
                  <label htmlFor="movie-title">Title</label>
                  <Field
                    className="edit-input"
                    id='movie-title'
                    type='text'
                    name='title'
                    placeholder='e.g. Moana'
                    autoComplete="off"
                  />
                  <label htmlFor="release-date">Release Date</label>
                  <Field
                    className="edit-input"
                    id='release-date'
                    type='date'
                    name="release_date"
                    placeholder='Select Date'
                  />
                  <label htmlFor="movie-url">Movie URL</label>
                  <Field
                    className="edit-input"
                    id='movie-url'
                    type='url'
                    name='poster_path'
                    placeholder='e.g. moana.com'
                    autoComplete="off"
                  />
                  <label htmlFor="genres">Genre</label>
                    <Field id="genres" className="edit-input filter-select" name="genres" component="select" onChange={(e: { target: { value: any; }; }) => onChangeGenres(e, setFieldValue)}>
                      <option hidden value=""></option>
                      {
                        Links.map((el, index) => <option key={el} value={index + 1}>{el}</option>)
                      }
                    </Field>
                  <label htmlFor="overview">Overview</label>
                  <Field
                    className="edit-input"
                    id='overview'
                    type='text'
                    name='overview'
                    placeholder='Type movie overview here'
                    autoComplete="off"
                  />
                  <label htmlFor="runtime">Runtime</label>
                  <Field
                    className="edit-input"
                    id='runtime'
                    name='runtime'
                    type='text'
                    placeholder='Movie runtime'
                    autoComplete="off"
                  />
                  <label htmlFor="tagline">Tagline</label>
                  <Field
                    className="edit-input"
                    id='tagline'
                    name='tagline'
                    type='text'
                    placeholder='Movie tagline'
                    autoComplete="off"
                  />
                </div>
                <div className="edit-footer">
                  <button className='edit-reset-btn' type='reset'>Reset</button>
                  <button className='edit-submit-btn' type='submit'>Save</button>
                </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

CreateModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired
}
