class MoviesController < ApplicationController
  before_action :set_movie, only: [:show, :destroy, :update]
  
  def index
    movies = Movie.all.order('name ASC')
    render json: movies
  end
  
  def show
    render json: @movie
  end
    
  def create
    movie = Movie.new(movie_params)
    if movie.save
      render json: movie
    else
      render json: { message: movie.errors }
    end
  end
  
  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: { message: @movie.errors }
    end
  end
  
  def destroy
    if @movie.destroy
      render status: 204
    else
      render json: { message: "ERROR, ERROR cannot destroy"}, status: 400
    end
  end
  
  private
    
  def movie_params
    params.permit(:name)
  end
  
  def set_movie
    @movie = Movie.find_by(id: params[:id])
  end
end