import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { submitFormAction } from 'store/actions/app';
import Form from 'components/Register/Form';
import ReceivedApplication from 'components/Register/ReceivedApplication';

/* -------------------------------------------------------------------------- */
/*                                    Form                                    */
/* -------------------------------------------------------------------------- */

function FormDispatch(dispatch: Dispatch) {
  return bindActionCreators(
    {
      submitFormAction: submitFormAction.STARTED
    },
    dispatch
  );
}
export const FormContainer = connect(null, FormDispatch)(Form);

/* -------------------------------------------------------------------------- */
/*                             ReceivedApplication                            */
/* -------------------------------------------------------------------------- */

const receivedApplicationProps = (state: any) => ({
  formData: state.app.formData
});

export const ReceivedApplicationContainer = connect(receivedApplicationProps, null)(ReceivedApplication);
