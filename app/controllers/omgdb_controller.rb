class OmgdbController < ApplicationController
  def index
    render component: 'App'
  end

  def show
    @imdb_id = params[:id]
    render component: 'Show', props: { imdbId: @imdb_id }
  end
end
