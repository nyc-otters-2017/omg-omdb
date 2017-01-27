class OmgdbController < ApplicationController
  def index
  end

  def show
    @imdb_id = params[:id]
    render component: 'Show', props: { imdbId: @imdb_id }
  end
end
