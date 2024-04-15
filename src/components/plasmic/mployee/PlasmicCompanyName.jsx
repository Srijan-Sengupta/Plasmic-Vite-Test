// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 414xL5G8mL1Z1RMz34t6rd
// Component: dGWp41rtaW_m
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  initializeCodeComponentStates,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdPassword } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdDatePicker } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 414xL5G8mL1Z1RMz34t6rd/projectcss
import sty from "./PlasmicCompanyName.module.css"; // plasmic-import: dGWp41rtaW_m/css

createPlasmicElementProxy;

export const PlasmicCompanyName__VariantProps = new Array();

export const PlasmicCompanyName__ArgProps = new Array();

const $$ = {};

function PlasmicCompanyName__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,
        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (() => {
    const child$Props = {
      className: classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.form
      ),
      extendedOnValuesChange: generateStateOnChangePropForCodeComponents(
        $state,
        "value",
        ["form", "value"],
        FormWrapper_Helpers
      ),
      formItems: undefined,
      labelCol: { span: 8, horizontalOnly: true },
      layout: "horizontal",
      mode: undefined,
      onIsSubmittingChange: generateStateOnChangePropForCodeComponents(
        $state,
        "isSubmitting",
        ["form", "isSubmitting"],
        FormWrapper_Helpers
      ),
      ref: ref => {
        $refs["form"] = ref;
      },
      wrapperCol: { span: 16, horizontalOnly: true }
    };
    initializeCodeComponentStates(
      $state,
      [
        {
          name: "value",
          plasmicStateName: "form.value"
        },
        {
          name: "isSubmitting",
          plasmicStateName: "form.isSubmitting"
        }
      ],

      [],
      FormWrapper_Helpers ?? {},
      child$Props
    );
    return (
      <FormWrapper
        data-plasmic-name={"form"}
        data-plasmic-override={overrides.form}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        {...child$Props}
      >
        <FormItemWrapper
          className={classNames("__wab_instance", sty.formField__tSyDo)}
          label={"First name"}
          rules={[{ ruleType: "required" }]}
        >
          <AntdInput
            className={classNames("__wab_instance", sty.input__dvv0B)}
          />
        </FormItemWrapper>
        <FormItemWrapper
          className={classNames("__wab_instance", sty.formField__ku9Of)}
          label={"Last Name"}
          rules={[{ ruleType: "required" }]}
        >
          <AntdInput
            className={classNames("__wab_instance", sty.input__bGp7F)}
          />
        </FormItemWrapper>
        <FormItemWrapper
          className={classNames("__wab_instance", sty.formField___9HV9S)}
          label={"Password"}
          rules={[{ ruleType: "required" }, { ruleType: "min", length: 8 }]}
        >
          <AntdPassword
            className={classNames("__wab_instance", sty.passwordInput__jXikR)}
          />
        </FormItemWrapper>
        <FormItemWrapper
          className={classNames("__wab_instance", sty.formField__vZf0J)}
          label={"Re enter password"}
          rules={[{ ruleType: "required" }, { ruleType: "min", length: 8 }]}
        >
          <AntdPassword
            className={classNames("__wab_instance", sty.passwordInput___5RSdb)}
          />
        </FormItemWrapper>
        <FormItemWrapper
          className={classNames("__wab_instance", sty.formField___1GIon)}
          label={"Date of Birth"}
          rules={[{ ruleType: "required" }]}
        >
          <AntdDatePicker
            className={classNames("__wab_instance", sty.dateTimePicker)}
            popupScopeClassName={sty["dateTimePicker__datePickerPopup"]}
          />
        </FormItemWrapper>
        <AntdButton
          className={classNames("__wab_instance", sty.button)}
          submitsForm={true}
          type={"default"}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"Submit"}
          </div>
        </AntdButton>
      </FormWrapper>
    );
  })();
}

const PlasmicDescendants = {
  form: ["form", "dateTimePicker", "button", "text"],
  dateTimePicker: ["dateTimePicker"],
  button: ["button", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCompanyName__ArgProps,
          internalVariantPropNames: PlasmicCompanyName__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCompanyName__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "form") {
    func.displayName = "PlasmicCompanyName";
  } else {
    func.displayName = `PlasmicCompanyName.${nodeName}`;
  }
  return func;
}

export const PlasmicCompanyName = Object.assign(
  // Top-level PlasmicCompanyName renders the root element
  makeNodeComponent("form"),
  {
    // Helper components rendering sub-elements
    dateTimePicker: makeNodeComponent("dateTimePicker"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicCompanyName
    internalVariantProps: PlasmicCompanyName__VariantProps,
    internalArgProps: PlasmicCompanyName__ArgProps
  }
);

export default PlasmicCompanyName;
/* prettier-ignore-end */
