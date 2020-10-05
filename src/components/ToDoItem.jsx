import React, { Component } from "react";
import styled from "styled-components";

const Li = styled.li`
  background-color: ${(props) => props.theme.hover};
  position: relative;
  overflow: hidden;
  border-radius: 0.25rem;
  margin: 0.5rem 0;

  &:hover > button {
    display: flex;
  }
`;

const Span = styled.span`
  padding: 0.5rem 1rem;
  padding-right: 3rem;
  display: block;
  text-align: left;
`;

const Button = styled.button`
  display: none;
  border: none;
  position: absolute;
  width: 3rem;
  right: 0;
  top: 0;
  bottom: 0;
  font-weight: bold;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 1.5rem;
    fill: ${(props) => props.theme.danger};
  }
  &: hover > svg {
    fill: #fff;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.danger};
  }
  &:focus {
    outline: none;
  }
`;

class ToDoItem extends Component {
  render() {
    return (
      <Li>
        <Span className="item">{this.props.item}</Span>
        <Button onClick={() => this.props.onDelete(this.props.item)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.995 511.995">
            <g>
              <path d="M437.126,74.939c-99.826-99.826-262.307-99.826-362.133,0C26.637,123.314,0,187.617,0,256.005 s26.637,132.691,74.993,181.047c49.923,49.923,115.495,74.874,181.066,74.874s131.144-24.951,181.066-74.874 C536.951,337.226,536.951,174.784,437.126,74.939z M409.08,409.006c-84.375,84.375-221.667,84.375-306.042,0 c-40.858-40.858-63.37-95.204-63.37-153.001s22.512-112.143,63.37-153.021c84.375-84.375,221.667-84.355,306.042,0 C493.435,187.359,493.435,324.651,409.08,409.006z" />
              <path d="M341.525,310.827l-56.151-56.071l56.151-56.071c7.735-7.735,7.735-20.29,0.02-28.046 c-7.755-7.775-20.31-7.755-28.065-0.02l-56.19,56.111l-56.19-56.111c-7.755-7.735-20.31-7.755-28.065,0.02 c-7.735,7.755-7.735,20.31,0.02,28.046l56.151,56.071l-56.151,56.071c-7.755,7.735-7.755,20.29-0.02,28.046 c3.868,3.887,8.965,5.811,14.043,5.811s10.155-1.944,14.023-5.792l56.19-56.111l56.19,56.111 c3.868,3.868,8.945,5.792,14.023,5.792c5.078,0,10.175-1.944,14.043-5.811C349.28,331.117,349.28,318.562,341.525,310.827z" />
            </g>
          </svg>
        </Button>
      </Li>
    );
  }
}

export default ToDoItem;
