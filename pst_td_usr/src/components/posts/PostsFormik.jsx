import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { renderPost } from '../../store/postSlice';
import { useAddPostMutation } from '../../store/apiSlice';

const PostsFormik = () => {
    const dispatch = useDispatch();
    const [addPost] = useAddPostMutation();

    return (
        <>
            <Formik
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{ textField: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.textField) {
                        errors.textField = 'Use some symbols';
                    } else if (values.textField.length <= 23) {
                        errors.textField = 'Use more symbols (>23)';
                    } else if (values.textField.length > 230) {
                        errors.textField = 'Use less symbols (<230)';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    if (values.textField.trim().length) {
                        dispatch(renderPost(values.textField));
                    }
                    addPost({ body: values.textField });
                    setSubmitting(false);
                    resetForm({ values: '' });
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="posts-form">
                        <label className="posts-form-label">
                            Post Text (Formik)
                            <Field
                                as="textarea"
                                name="textField"
                                className="posts-form-area"
                            />
                        </label>
                        <div className="posts-form-error">
                            <ErrorMessage
                                name="textField"
                                component="span"
                                className="posts-form-error-text"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="posts-form-button"
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default PostsFormik;
