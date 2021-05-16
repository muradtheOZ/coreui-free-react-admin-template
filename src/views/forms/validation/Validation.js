import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormControl,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsLink, Example } from 'src/reusable'

const CustomStyles = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md="4">
        <CFormLabel htmlFor="validationCustom01">Email</CFormLabel>
        <CFormControl type="text" id="validationCustom01" value="Mark" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md="4">
        <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
        <CFormControl type="text" id="validationCustom02" value="Otto" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md="4">
        <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormControl
            type="text"
            id="validationCustomUsername"
            value=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md="6">
        <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
        <CFormControl type="text" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md="3">
        <CFormLabel htmlFor="validationCustom04">City</CFormLabel>
        <CFormSelect id="validationCustom04">
          <option selected disabled>
            Choose...
          </option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md="3">
        <CFormLabel htmlFor="validationCustom05">City</CFormLabel>
        <CFormControl type="text" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs="12">
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs="12">
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

const BrowserDefaults = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm className="row g-3 needs-validation" validated={validated} onSubmit={handleSubmit}>
      <CCol md="4">
        <CFormLabel htmlFor="validationDefault01">Email</CFormLabel>
        <CFormControl type="text" id="validationDefault01" value="Mark" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md="4">
        <CFormLabel htmlFor="validationDefault02">Email</CFormLabel>
        <CFormControl type="text" id="validationDefault02" value="Otto" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md="4">
        <CFormLabel htmlFor="validationDefaultUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend02">@</CInputGroupText>
          <CFormControl
            type="text"
            id="validationDefaultUsername"
            value=""
            aria-describedby="inputGroupPrepend02"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md="6">
        <CFormLabel htmlFor="validationDefault03">City</CFormLabel>
        <CFormControl type="text" id="validationDefault03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md="3">
        <CFormLabel htmlFor="validationDefault04">City</CFormLabel>
        <CFormSelect id="validationDefault04">
          <option selected disabled>
            Choose...
          </option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md="3">
        <CFormLabel htmlFor="validationDefault05">City</CFormLabel>
        <CFormControl type="text" id="validationDefault05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs="12">
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs="12">
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

const Tooltips = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md="4" className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">Email</CFormLabel>
        <CFormControl type="text" id="validationTooltip01" value="Mark" required />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md="4" className="position-relative">
        <CFormLabel htmlFor="validationTooltip02">Email</CFormLabel>
        <CFormControl type="text" id="validationTooltip02" value="Otto" required />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md="4" className="position-relative">
        <CFormLabel htmlFor="validationTooltipUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormControl
            type="text"
            id="validationTooltipUsername"
            value=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback tooltip invalid>
            Please choose a username.
          </CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md="6" className="position-relative">
        <CFormLabel htmlFor="validationTooltip03">City</CFormLabel>
        <CFormControl type="text" id="validationTooltip03" required />
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      <CCol md="3" className="position-relative">
        <CFormLabel htmlFor="validationTooltip04">City</CFormLabel>
        <CFormSelect id="validationTooltip04" required>
          <option selected disabled value="">
            Choose...
          </option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      <CCol md="3" className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">City</CFormLabel>
        <CFormControl type="text" id="validationTooltip05" required />
        <CFormFeedback tooltip invalid>
          Please provide a valid zip.
        </CFormFeedback>
      </CCol>
      <CCol xs="12" className="position-relative">
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}

const Validation = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Validation</strong> <small>Custom styles</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              For custom CoreUI form validation messages, you'll need to add the{' '}
              <code class="css-0">noValidate</code> boolean property to your{' '}
              <code class="css-0">&lt;CForm&gt;</code>. This disables the browser default feedback
              tooltips, but still provides access to the form validation APIs in JavaScript. Try to
              submit the form below; our JavaScript will intercept the submit button and relay
              feedback to you. When attempting to submit, you'll see the{' '}
              <code class="css-0">:invalid</code> and <code class="css-0">:valid</code> styles
              applied to your form controls.
            </p>
            <p class="text-medium-emphasis small">
              Custom feedback styles apply custom colors, borders, focus styles, and background
              icons to better communicate feedback.{' '}
            </p>
            <Example href="https://coreui.io/react/docs/4.0/forms/validation">
              {CustomStyles()}
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Validation</strong> <small>Browser defaults</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Not interested in custom validation feedback messages or writing JavaScript to change
              form behaviors? All good, you can use the browser defaults. Try submitting the form
              below. Depending on your browser and OS, you'll see a slightly different style of
              feedback.
            </p>
            <p class="text-medium-emphasis small">
              While these feedback styles cannot be styled with CSS, you can still customize the
              feedback text through JavaScript.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/forms/validation#browser-defaults">
              {BrowserDefaults()}
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Validation</strong> <small>Server side</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              We recommend using client-side validation, but in case you require server-side
              validation, you can indicate invalid and valid form fields with{' '}
              <code class="css-0">isInvalid</code> and <code class="css-0">isValid</code> boolean
              properties.
            </p>
            <p class="text-medium-emphasis small">
              For invalid fields, ensure that the invalid feedback/error message is associated with
              the relevant form field using <code class="css-0">aria-describedby</code> (noting that
              this attribute allows more than one <code class="css-0">id</code> to be referenced, in
              case the field already points to additional form text).
            </p>
            <Example href="https://coreui.io/react/docs/4.0/forms/validation#server-side">
              <CForm className="row g-3 needs-validation">
                <CCol md="4">
                  <CFormLabel htmlFor="validationServer01">Email</CFormLabel>
                  <CFormControl type="text" id="validationServer01" value="Mark" isValid required />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CCol>
                <CCol md="4">
                  <CFormLabel htmlFor="validationServer02">Email</CFormLabel>
                  <CFormControl type="text" id="validationServer02" value="Otto" isValid required />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CCol>
                <CCol md="4">
                  <CFormLabel htmlFor="validationServerUsername">Username</CFormLabel>
                  <CInputGroup className="has-validation">
                    <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
                    <CFormControl
                      type="text"
                      id="validationServerUsername"
                      value=""
                      aria-describedby="inputGroupPrepend03"
                      isInvalid
                      required
                    />
                    <CFormFeedback invalid>Please choose a username.</CFormFeedback>
                  </CInputGroup>
                </CCol>
                <CCol md="6">
                  <CFormLabel htmlFor="validationServer03">City</CFormLabel>
                  <CFormControl type="text" id="validationServer03" isInvalid required />
                  <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                </CCol>
                <CCol md="3">
                  <CFormLabel htmlFor="validationServer04">City</CFormLabel>
                  <CFormSelect id="validationServer04" isInvalid>
                    <option selected disabled>
                      Choose...
                    </option>
                    <option>...</option>
                  </CFormSelect>
                  <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                </CCol>
                <CCol md="3">
                  <CFormLabel htmlFor="validationServer05">City</CFormLabel>
                  <CFormControl type="text" id="validationServer05" isInvalid required />
                  <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
                </CCol>
                <CCol xs="12">
                  <CFormCheck
                    type="checkbox"
                    id="invalidCheck"
                    label="Agree to terms and conditions"
                    isInvalid
                    required
                  />
                  <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
                </CCol>
                <CCol xs="12">
                  <CButton color="primary" type="submit">
                    Submit form
                  </CButton>
                </CCol>
              </CForm>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Validation</strong> <small>Supported elements</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              Validation styles are available for the following form controls and components:
            </p>
            <ul class="css-0">
              <li class="css-0">
                <code class="css-0">&lt;CFormControl&gt;</code>s
              </li>
              <li class="css-0">
                <code class="css-0">&lt;CFormSelect&gt;</code>s
              </li>
              <li class="css-0">
                <code class="css-0">&lt;CFormCheck&gt;</code>s
              </li>
            </ul>
            <Example href="https://coreui.io/react/docs/4.0/forms/validation#supported-elements">
              <CForm validated={true}>
                <div class="mb-3">
                  <CFormLabel for="validationTextarea" class="form-label">
                    Textarea
                  </CFormLabel>
                  <CFormControl
                    component="textarea"
                    id="validationTextarea"
                    placeholder="Required example textarea"
                    isInvalid
                    required
                  ></CFormControl>
                  <CFormFeedback invalid>Please enter a message in the textarea.</CFormFeedback>
                </div>
                <CFormCheck
                  className="mb-3"
                  id="validationFormCheck1"
                  label="Check this checkbox"
                  required
                />
                <CFormFeedback invalid>Example invalid feedback text</CFormFeedback>

                <CFormCheck
                  type="radio"
                  name="radio-stacked"
                  id="validationFormCheck2"
                  label="Check this checkbox"
                  required
                />

                <CFormCheck
                  className="mb-3"
                  type="radio"
                  name="radio-stacked"
                  id="validationFormCheck3"
                  label="Or toggle this other radio"
                  required
                />
                <CFormFeedback invalid>More example invalid feedback text</CFormFeedback>

                <div class="mb-3">
                  <CFormSelect required aria-label="select example">
                    <option value="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                  <CFormFeedback invalid>Example invalid select feedback</CFormFeedback>
                </div>

                <div class="mb-3">
                  <CFormControl
                    type="file"
                    id="validationTextarea"
                    aria-label="file example"
                    required
                  />
                  <CFormFeedback invalid>Example invalid form file feedback</CFormFeedback>
                </div>

                <div class="mb-3">
                  <CButton type="submit" color="primary" disabled>
                    Submit form
                  </CButton>
                </div>
              </CForm>
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Validation</strong> <small>Tooltips</small>
          </CCardHeader>
          <CCardBody>
            <p class="text-medium-emphasis small">
              If your form layout allows it, you can swap the text for the tooltip to display
              validation feedback in a styled tooltip. Be sure to have a parent with{' '}
              <code class="css-0">position: relative</code> on it for tooltip positioning. In the
              example below, our column classes have this already, but your project may require an
              alternative setup.
            </p>
            <Example href="https://coreui.io/react/docs/4.0/forms/validation#tooltips">
              {Tooltips()}
            </Example>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Validation