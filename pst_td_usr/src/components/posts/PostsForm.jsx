import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { renderPost } from '../../store/postSlice';
import { useAddPostMutation } from '../../store/apiSlice';

const PostsForm = () => {
    const dispatch = useDispatch();
    const [addPost] = useAddPostMutation();

    const resolver = (values) => {
        return {
            values: values.postText ? values : {},
            errors: !values.postText
                ? {
                      postText: {
                          type: 'required',
                          message: 'Use some symbols',
                      },
                  }
                : {} && values.postText.length <= 23
                ? {
                      postText: {
                          type: 'minLength',
                          message: 'Use more symbols (>23)',
                      },
                  }
                : {} && values.postText.length >= 230
                ? {
                      postText: {
                          type: 'maxLength',
                          message: 'Use less symbols (<230)',
                      },
                  }
                : {},
        };
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        resolver,
    });

    const postSubmit = (values) => {
        if (values.postText.trim().length) {
            dispatch(renderPost(values.postText));
        }
        addPost({ body: values.postText });
        reset();
    };

    return (
        <>
            <form className="posts-form" onSubmit={handleSubmit(postSubmit)}>
                <label className="posts-form-label">
                    Post Text (React Hook Form)
                    <textarea
                        className="posts-form-area"
                        {...register('postText')}
                        type="text"
                    />
                </label>
                <div className="posts-form-error">
                    {errors?.postText && (
                        <span className="posts-form-error-text">
                            {errors?.postText.message || '!!! ERROR !!!'}
                        </span>
                    )}
                </div>
                <input
                    className="posts-form-button"
                    type="submit"
                    value="Submit"
                />
            </form>
        </>
    );
};

export default PostsForm;
