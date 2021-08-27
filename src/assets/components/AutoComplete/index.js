import React, { Component } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import api from '../../../services/api';
import { withRouter } from 'react-router-dom';

import { DivSearchBar } from './styles';

class AutoComplete extends Component {
  state = {
    items: [],
  };

  async componentDidMount() {
    const response = await api.get(`characters`);

    const data = response.data.map((item) => ({
      ...item,
    }));

    this.setState({ items: data });
  }

  render() {
    const { items } = this.state;

    const handleOnSelect = (item) => {
      const { items } = this.state;

      // Finds the slug for the selected item
      const found = items.find((element) => element.id == item.id);
      //console.log(`slug: ${found.slug}`);

      // Change current page with the character page
      this.props.history.push(`/characters/${found.slug}`);
    };

    return (
      <>
        <DivSearchBar>
          <ReactSearchAutocomplete
            items={items}
            onSelect={handleOnSelect}
            autoFocus
          />
        </DivSearchBar>
      </>
    );
  }
}

export default withRouter(AutoComplete);
